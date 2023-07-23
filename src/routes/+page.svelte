<script lang="ts">
  import moment from "moment";
  import { notes } from "../data/note";

  // Reactive
  $: notes;

  function formatDate(date: Date) {
    return moment().format("LLL");
  }
</script>

<div class="container mx-auto p-5">
  <div class="text-center flex flex-col items-center space-y-5">
    <h1 class="font-bold text-xl">Welcome to Notebook</h1>
    <blockquote class="mx-auto max-w-xl italic m-2">
      "In here you can create your dream for your brain desire, even though it
      is not possible by You, but God can make it happen to you if you try hard
      as possible""
    </blockquote>

    <!-- <div>Here are list you can build</div> -->
    <a href="/add" class="p-2 border border-black rounded w-fit">Add new Note</a
    >
    {#if notes.length > 0}
      <div class="container mx-auto w-1/2 text-left">
        <h1 class="my-5 text-2xl font-medium">My Wishlist</h1>
        {#each notes as nb}
          <hr class="my-5" />
          <div class="border border-black rounded p-3">
            <div class="flex flex-row justify-between">
              <p>{nb.name}</p>
              <p class="flex-shrink-0 font-bold self-center">
                {formatDate(nb.updateAt)}
              </p>
            </div>
            <hr class="my-2" />
            <p>{nb.description}</p>
          </div>
        {/each}
      </div>
    {:else}
      <p class="italic text-xl">There is no current wishlist here.</p>
    {/if}
  </div>
</div>
