import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NzFormatEmitEvent, NzMessageService, NzModalService } from 'ng-zorro-antd';
import { ManagementService } from './management.service';
import { GmModalMoreComponent } from '../../module/gm-modal-more/gm-modal-more.component';

/**
 * @interface 表格宽高
 */
interface TableScroll {
  x: string;
  y: string;
}

// /**
//  * @interface 表格数据
//  */
// interface TableData {
//   name: string;
//   age: number;
//   address: string;
//   checked?: boolean;
//   disabled?: boolean;
// }

@Component({
  selector: 'management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less'],
  providers: [ManagementService]
})
export class ManagementComponent implements OnInit {

  @ViewChild('tableBox') tableBox: Element;
  @HostListener('window:resize', ['$event'])
  //监听窗口变化
  onResize(event) {
    let tableClientHeight = this.tableBox['nativeElement'].clientHeight - 150;
    // let tableClientWidth = this.tableBox['nativeElement'].clientWidth;
    this.tableScroll = {
      x: '1200px',
      y: `${tableClientHeight}px`
    };
  }
  // 查询条件
  moreQueryVisible = false;
  dataSet = [];
  tableScroll: TableScroll;
  totalPageNum = 0;
  currentPageNum = 1;
  pageSizeNum = 10;

  // 表格相关
  allChecked = false;
  indeterminate = false;
  currentPageData: Array<any> = [];
  checkedData: Array<any> = [];
  detail;

  nodes;
  // 树节点点击事件
  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
    alert(event.node.title);
  }

  // 当前页面展示数据改变的回调函数
  // currentPageDataChange($event: Array<TableData>): void {
  //   this.currentPageData = [];
  //   this.currentPageData = $event;
  // }

  // 单选
  nzCheckedChange(data?): void {
    this.checkedData = [];
    const allChecked = this.currentPageData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.currentPageData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.currentPageData.forEach(item => {
      if (!item.disabled && item.checked) {
        this.checkedData.push(item);
      }
    });
    console.log(this.checkedData);
  }

  // 全选
  checkAll(value: boolean): void {
    this.currentPageData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.nzCheckedChange();
  }
  // 点击操作事件
  checkItemMore(data): void {
    const modal = this.modalService.create({
      nzTitle: '员工信息',
      nzContent: GmModalMoreComponent,
      nzComponentParams: {
        detail: data,
        moduleName: 'more'
      },
      nzFooter: null
    });
  }
  checkItemUpdate(data): void {
    const modal = this.modalService.create({
      nzTitle: '修改信息',
      nzContent: GmModalMoreComponent,
      nzComponentParams: {
        detail: data,
        moduleName: 'update'
      }
    });
  }
  checkItemLive(data): void {
    const modal = this.modalService.create({
      nzTitle: '离职',
      nzContent: GmModalMoreComponent,
      nzComponentParams: {
        detail: data,
        moduleName: 'live'
      }
    });
  }
  changePageNum(event) {
    this.currentPageNum = event;
    this.getData();
  }
  changeSizeNum(event) {
    this.pageSizeNum = event;
    this.getData();
  }
  getData() {
    this.managementService.getUserData({size: this.pageSizeNum, current: this.currentPageNum}).subscribe(
      data => {
        if (!data.data && data.data == null) {
          this.message.create('error', '未获取到数据！');
        } else {
          this.totalPageNum = data.data.page.total;
          this.dataSet = data.data.page.records;
        }
      },
      () => {
        this.message.create('error', '未获取到数据！');
      }
    );
  }
  constructor(private managementService: ManagementService, private message: NzMessageService, private modalService: NzModalService) {
  }
  ngOnInit(): void {
    // for (let i = 0; i < 100; i++) {
    //   this.dataSet.push({
    //     name: `开发 ${i}`,
    //     age: 30,
    //     address: `天耀宏图 no. ${i}`
    //   });
    // }
    // 设置表格高度
    let tableClientHeight = this.tableBox['nativeElement'].clientHeight - 150;
    // let tableClientWidth = this.tableBox['nativeElement'].clientWidth;
    this.tableScroll = {
      x: '1200px',
      y: `${tableClientHeight}px`
    };
    this.getData();
    this.managementService.getDepartmentData().subscribe(
      data => {
        if (!data.data && data.data == null) {
          this.message.create('error', '未获取到数据！');
        } else {
          this.nodes = this.managementService.changeTreeNode(data.data, 'depName', 'childDep');
        }
      },
      () => {
        this.message.create('error', '未获取到数据！');
      }
    );
  }
}
