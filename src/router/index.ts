import { createRouter, createWebHashHistory } from "vue-router";
import { getToken, getAdmin, removeAdmin } from "@/utils/auth";
// import { ElMessage } from "element-plus";

const routes = [
    {
        path: "/",
        component: () => import("@/views/home.vue"),
        // redirect: "/homepage",
        meta: {
            title: "首页",
            requireAuth: true,
            isAdmin: false,
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior: () => ({ top: 0 }),
});
router.beforeEach(async (to, from, next) => {
    // let token = getToken();
    // let isAdmin = getAdmin();

    next()
    
});
export default router;
