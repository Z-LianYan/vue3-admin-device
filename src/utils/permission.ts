import router from "@/router";
import { 
  // useUserStore, 
  usePermissionStore 
} from "@/store";
// import NProgress from "@/utils/nprogress";
// import { RouteRecordRaw } from "vue-router";
// import { TOKEN_KEY } from "@/enums/CacheEnum";

export function setupPermission() {
  // 白名单路由
  const whiteList = ["/login"];

  router.beforeEach(async (to, from, next) => {
    const permissionStore = usePermissionStore();
    console.log('beforeEach----6666')
    permissionStore.generateRoutes(["ADMIN"]).then((res:any)=>{
      console.log('res===>>permissionStore',res);
      // menu_list.value = res;
    });
    next();
    
    // NProgress.start();
    // const hasToken = localStorage.getItem(TOKEN_KEY);
    // if (hasToken) {
    //   if (to.path === "/login") {
    //     // 如果已登录，跳转首页
    //     next({ path: "/" });
    //     NProgress.done();
    //   } else {
    //     const userStore:any = useUserStore();
    //     const hasRoles = userStore.user.roles && userStore.user.roles.length > 0;
    //     if (hasRoles) {
    //       // 未匹配到任何路由，跳转404
    //       if (to.matched.length === 0) {
    //         from.name ? next({ name: from.name }) : next("/404");
    //       } else {
    //         next();
    //       }
    //     } else {
    //       const permissionStore:any = usePermissionStore();
    //       try {
    //         const { roles } = await userStore.getUserInfo();
    //         const accessRoutes = await permissionStore.generateRoutes(roles);
    //         accessRoutes.forEach((route: RouteRecordRaw) => {
    //           router.addRoute(route);
    //         });
    //         next({ ...to, replace: true });
    //       } catch (error) {
    //         // 移除 token 并跳转登录页
    //         await userStore.resetToken();
    //         next(`/login?redirect=${to.path}`);
    //         NProgress.done();
    //       }
    //     }
    //   }
    // } else {
    //   // 未登录可以访问白名单页面
    //   if (whiteList.indexOf(to.path) !== -1) {
    //     next();
    //   } else {
    //     next(`/login?redirect=${to.path}`);
    //     NProgress.done();
    //   }
    // }
  });

  router.afterEach(() => {
    // NProgress.done();
  });
}
