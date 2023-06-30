<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<p>You clicked this {count}</p>
<button on:click={handleClick}>Click Me</button>
