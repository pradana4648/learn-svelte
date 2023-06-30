<script lang="ts">
  import "../app.css";
  type Notebook = {
    readonly id: number;
    readonly name: string;
  };

  let notebooks: Notebook[] = [];

  function generateRandom() {
    const randomId = Math.floor(Math.random() * 100);
    const data: Notebook = {
      id: randomId,
      name: "Test " + randomId,
    };
    notebooks = [...notebooks, data];
  }
</script>

<div class="container mx-auto p-5">
  <div class="text-center">
    <h1 class="font-bold text-xl">Welcome to Notebook</h1>
    <blockquote class="mx-auto max-w-xl italic m-2">
      "In here you can create your dream for your brain desire, even though it
      is not possible by You, but God can make it happen to you if you try hard
      as possible""
    </blockquote>
    <!-- <div>Here are list you can build</div> -->
    <button
      on:click={generateRandom}
      class="p-2 border border-black rounded active:bg-gray-200"
      >Generate Random</button
    >
    <div>
      {#each notebooks as nb}
        <p class="m-2">{nb.name}</p>
      {/each}
    </div>
  </div>
</div>
