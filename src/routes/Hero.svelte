<script>
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import aniversary from "$lib/images/aniversary.png";

  let image = aniversary;
</script>

<div class="container mx-auto flex flex-col md:flex-row items-center py-12 md:py-24">
    <div class="flex-1 flex flex-col justify-center items-start  p-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl  leading-tight mb-6 text-primary  font-bold tracking-tight  sm:text-6xl">
          Celebrating 25th Anniversary
      </h1>
      <p class="text-lg md:text-xl mb-6   mt-6  leading-8 text-muted-foreground">
          As members of the Chemmanur family, we invite you to reconnect with our roots, celebrate our shared history, and strengthen the bonds that unite us across generations. This platform is dedicated to preserving the legacy and traditions of our ancestors, exclusively for the members of the Chemmanur family. Together, let's honor our past, engage in the present, and build a promising future for the next generations. Welcome to your family community, where every story matters and every connection counts.
      </p>
      <Button variant="outline" href="#get-started">
        Get Started
      </Button>
    </div>
    <div class="flex-1">
      <div class="m-4">
          <img src={image} alt="Chemmanur anniversary celebration" >
        </div>
    </div>
  </div>
