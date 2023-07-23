<script lang="ts">
  import { goto } from "$app/navigation";
  import { LoremIpsum } from "lorem-ipsum";
  import { notes, type Note } from "../../data/note";

  let note: Note = {
    name: "",
    description: "",
    createdAt: new Date(),
    updateAt: new Date(),
  };

  // Reactive
  $: note;

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  function submit() {
    console.log("Please wait");
    console.log("Current note size is ", notes.length);
    setTimeout(() => {
      if (note.description === "") {
        note.description = lorem.generateParagraphs(6);
      }
      if (note.name === "") {
        note.name = lorem.generateWords(20);
      }
      notes.push(note);
      note = {
        name: "",
        description: "",
        createdAt: new Date(),
        updateAt: new Date(),
      };
    }, 1000);

    setTimeout(() => {
      goto("/");
    }, 1000);
  }
</script>

<div class="container mx-auto p-5 h-screen">
  <div class="flex flex-col items-center space-y-5">
    <h1 class="font-bold text-2xl">Make your wish right now</h1>
    <form class="flex flex-col items-center space-y-5" on:submit={submit}>
      <input
        class="rounded border-2 border-blue-300 underline underline-offset-6 p-2 w-96"
        type="text"
        placeholder="Enter your Title here"
        bind:value={note.name}
      />
      <textarea
        class="border-2 border-blue-300 p-2 w-96"
        placeholder="Enter your long description here"
        rows="10"
        bind:value={note.description}
      />
      <button
        type="submit"
        class="bg-blue-500 w-full p-3 text-white active:-translate-y-2 active:duration-300"
        >Add</button
      >
    </form>
  </div>
</div>
