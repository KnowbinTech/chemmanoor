<script>
  import { Button } from "$lib/components/ui/button";
  import aboutImage from "$lib/images/logo.png";
</script>

<div class="container mx-auto flex flex-col md:flex-row items-center py-12 md:py-24">
  <div class="flex-1">
    <img src={aboutImage} alt="About Us" class="w-full h-auto fill-black dark:fill-white">
  </div>
  <div class="flex-1 flex flex-col justify-center items-start p-4">
    <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-4 text-primary">
      About Chemmanur
    </h2>
    <p class="text-md md:text-lg mb-4 text-primary-muted leading-relaxed">
      Chemmanur has been a trusted name for generations, known for our commitment to tradition and quality. Our journey through the years has been marked by innovation and customer satisfaction. We invite you to learn more about our rich history and the values that drive our business forward.
    </p>
    <Button variant="outline" href="#read-more">
      Read More
    </Button>
  </div>
</div>
