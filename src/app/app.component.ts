import { Component, ViewChild, TemplateRef } from '@angular/core';
import { GLOBAL_FRAME_CONFIG } from '../config/navi-config';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ReuseStrategyService } from './reuse-strategy';
import { Login } from './shared/login';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styles: ['./app.component.less']
})
export class AppComponent {
  // 登录
  private login = new Login();
  private dropdown: NzDropdownContextComponent;

  // 自定义收缩按钮
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  triggerTemplate = null;
  // 默认展开
  isCollapsed: Boolean = false;
  navi: Array<{ title: string }> = [];
  tabs: Array<{ title: string, url: string }> = [];
  systemInfo: object = {};
  loginInfo: object = {};
  tabActiveIndex: Number = 0;

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  close(e: NzMenuItemDirective): void {
    this.dropdown.close();
  }
  
  to(item) {
    // this.router.navigate([item.url]);
    this.router.navigateByUrl(item.url);
  }

  //关闭其他tab
  closeOtherTabs(nowtab, event: Event) {
    let url: string = nowtab.url;
    event.preventDefault();
    this.tabs = [nowtab];
    ReuseStrategyService.deleteRouteSnapshot(url);
    this.router.navigateByUrl(url);
  }

  //关闭右侧taab
  closeRightTabs(nowtab, event: Event) {
    let url: string = nowtab.url;
    event.preventDefault();
    // 当前关闭的是第几个路由
    const index = this.tabs.findIndex(p => p.url === url);
    // 如果只有一个不可以关闭
    if (index === (this.tabs.length - 1)) { return; }
    this.tabs = this.tabs.slice(0, index + 1);
    // 删除复用
    ReuseStrategyService.deleteRouteSnapshot(url);
    if (url === this.router.url) {
      this.router.navigateByUrl(url);
    }
  }

  //关闭tab
  closeTab(url: string, event: Event) {
    event.preventDefault();
    // 当前关闭的是第几个路由
    const index = this.tabs.findIndex(p => p.url === url);
    // 如果只有一个不可以关闭
    // if (this.tabs.length === 1) { return; }
    this.tabs = this.tabs.filter(p => p.url !== url);
    // 删除复用
    ReuseStrategyService.deleteRouteSnapshot(url);
    //关闭的是否为当前页面
    if (url === this.router.url) {
      // 显示上一个选中
      let menu = this.tabs[index - 1];
      if (!menu) {// 如果上一个没有下一个选中
        menu = this.tabs[index];
      }
      // 显示当前路由信息
      // this.router.navigate([menu.url]);
      this.router.navigateByUrl(menu.url);
    }
  }
  showLog() {
    console.log(this.router);
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private nzDropdownService: NzDropdownService,
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe((event) => {
        // 路由data的标题
        let title = event['title'];
        let menu = { title: title, url: this.router.url };
        // this.titleService.setTitle(title);
        let exitMenuIndex = this.tabs.findIndex(info => info.title === title);
        if (exitMenuIndex !== -1) {// 如果存在不添加，当前表示选中
          this.tabActiveIndex = exitMenuIndex;
          return;
        }
        this.tabs.push(menu);
        this.tabActiveIndex = this.tabs.length - 1;
      });
  }


  ngOnInit() {
    this.navi = GLOBAL_FRAME_CONFIG.navi;
    this.systemInfo = { systemName: GLOBAL_FRAME_CONFIG.systemName, systemEnglishName: GLOBAL_FRAME_CONFIG.systemEnglishName };
    this.loginInfo = { isLoginIn: true };
    this.triggerTemplate = this.customTrigger;
    console.log(this.router);
    // 临时登录
    this.login.login();
  }
}
