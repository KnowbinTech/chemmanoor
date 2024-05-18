export const menus = [
    {
        name: "Dashboard",
        icon: "home",
        route: "/dashboard"
    },
    {
        name: "Users",
        icon: "users",
        items: [
            { name: "Users", route: "User/Users" },
            { name: "Subscription", route: "/User/subscription" },
            { name: "Users Group", route: "/User/user-group" },
            
            // { name: "Attribute Group", route: "/products/attribute-group" },
            // { name: "Brand", route: "/products/brand" },
            // { name: "Category", route: "/products/category" }
        ]
    },

    {
        name: "Products",
        icon: "products",
        items: [
            { name: "Products", route: "/products/product" },
            { name: "Approvals", route: "/products/approvals" },
            { name: "Attribute", route: "/products/attribute" },
            { name: "Attribute Group", route: "/products/attribute-group" },
            { name: "Brand", route: "/products/brand" },
            { name: "Category", route: "/products/category" }
        ]
    },
    {
        name: "Hire",
        icon: "hire",
        items: [
            { name: "Browse Services", route: "/hire/browse_services" },
            { name: "Service Categories", route: "/hire/service_category" },
            { name: "Create Listing", route: "/hire/create_listing" },
            { name: "Approvals", route: "/hire/approvals" },
        ]
    },

    {
        name: "Vendors",
        icon: "vendors",
        items: [
            { name: "Browse Services", route: "/hire/browse-services" },
            { name: "Browse Products", route: "/hire/browse-products" },
            { name: "My Listings", route: "/hire/my-listings" },
            { name: "Create Listing", route: "/hire/create-listing" }
        ]
    },
 

    {
        name: "E-commerce",
        icon: "ecommerce",
        items: [
            { name: "Products", route: "/ecommerce/products" },
            { name: "Orders", route: "/ecommerce/orders" },
            { name: "Returns", route: "/ecommerce/returns" },
            { name: "Promotions", route: "/ecommerce/promotions" }
        ]
    },
  
    {
        name: "Analytics & Reporting",
        icon: "reports",
        items: [
            { name: "View Reports", route: "/analytics/view-reports" },
            { name: "sales Reports", route: "/analytics/sales-reports" },
            { name: "Payment Reports", route: "/analytics/payment-reports" },
            { name: "Export Data", route: "/analytics/export" }
        ]
    },
    {
        name: "Settings",
        icon: "gear",
        items: [
            { name: "Profile", route: "/profile" },
            { name: "Account Settings", route: "/settings/account-settings" },
            { name: "Export Data", route: "/analytics/export" }
        ]
    }

];