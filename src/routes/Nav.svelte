<script lang="ts">
    import { Sun, Moon } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button/index.js";
    import { toggleMode } from "mode-watcher";
    import { isLoggedIn } from "$lib/stores/data";
    import { goto } from "$app/navigation";
   import { WebNav } from "$lib/components/webnav/index";
    import { ShoppingCart } from "lucide-svelte";
    import { Bell } from "lucide-svelte";
    import { menus } from "$lib/components/menu";
    import { Home } from "lucide-svelte";
    import { FolderKanban } from "lucide-svelte";
    import { UserRoundSearch } from "lucide-svelte";
    import { BarChartHorizontalBig } from "lucide-svelte";
  import { Settings } from 'lucide-svelte';
  
    
  
    // import {
    //   DashboardMainNav,
    //   Search,
    //   UserNav,
    // } from "$lib/components/blocks/dashboardui/index";
    import * as Drawer from "$lib/components/ui/drawer";
    import { Menu } from "lucide-svelte";
    import { webmenu } from "$lib/components/webnav/webmenu";
  
    const icons:any = {
      'home': Home,
      'projects': FolderKanban,
      'hire': UserRoundSearch,
      'ecommerce': ShoppingCart,
      'reports': BarChartHorizontalBig
    };
  </script>
  
  <nav class=" backdrop-blur-md text-foreground">
    <div class="mx-auto px-4 py-6 flex items-center justify-between">
      <div class="md:hidden">
        <Drawer.Root>
          <Drawer.Trigger>
            <Button variant="outline">
              <Menu />
            </Button>
          </Drawer.Trigger>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title
                >
                <div class="text-2xl pl-12 mt-12 md:ml-10 font-bold">
                  Chemmanur
                </div></Drawer.Title
              >
            </Drawer.Header>
             {#if $isLoggedIn}
            <div class="flex flex-col px-4 mr-12 ml-8 text-lg space-y-2">
              {#each menus as menu}
                <details class="group">
                  <summary
                    class="flex items-center p-2 px-6 rounded-sm cursor-pointer hover:bg-muted"
                  >
                    <svelte:component
                      this={icons[menu.icon]}
                      class="h-5 w-5 mr-2"
                    />
                    {menu.name}
                  </summary>
                  {#if menu.items}
                    <div class="pl-12">
                      {#each menu.items as item}
                        <a
                          href={item.route}
                          class="block text-base p-2 hover:bg-muted"
                          >{item.name}</a
                        >
                      {/each}
                    </div>
                  {/if}
                </details>
              {/each}
            </div>
            {:else}
            <div class="flex flex-col px-4 mr-12 ml-8 text-lg space-y-2">
              {#each webmenu as menu}
              <div>
                <a href={menu.href}>
                {menu.name}
              </a>
              </div>
              {/each}
            </div>
            {/if}
            <Drawer.Footer>
              <Drawer.Close asChild>
                <button class="close-button">Close</button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Root>
      </div>
  
      <!-- <img src="/snap-serve-logo.png" alt="Snap Serve Logo" class="h-8"> -->
      <div><a href="/" class=" text-3xl font-bold">Chemmanur</a></div>
  
      <!-- <Button variant="outline" type="button" class="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><Menu /></Button> -->
      <div class="hidden md:flex md:items-center">
        {#if $isLoggedIn}
          <!-- User is logged in, show user navigation -->
          <!-- <DashboardMainNav /> -->
        {:else}
          <!-- User is not logged in, show login button -->
          <WebNav />
        {/if}
        <!-- Content here will be centered horizontally -->
      </div>
  
      
        <!-- <div class="hidden lg:flex lg:items-center"> -->
          <!-- <Search /> -->
          <!-- <ShoppingCart /> -->
        <!-- </div> -->
  
  
      <div class="flex justify-center gap-2 align-items-center">
        <Button on:click={toggleMode} variant="outline" size="icon">
            <Sun
              class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
              class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
          </Button>
        {#if $isLoggedIn}
          <!-- User is logged in, show user navigation -->
          <!-- <UserNav /> -->
          <Bell />
        {:else}
          <!-- User is not logged in, show login button -->
          <Button on:click={() => goto("/login")} class="me-2">Login</Button>
        {/if}
        
      </div>
    </div>
  </nav>
  