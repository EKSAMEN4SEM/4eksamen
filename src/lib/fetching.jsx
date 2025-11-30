export async function getData() {
  const data = await fetch(
    `https://cvhwjixofzvhcsllznri.supabase.co/rest/v1/konkret?select=*`,
    {
      headers: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2aHdqaXhvZnp2aGNzbGx6bnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMzczOTQsImV4cCI6MjA3OTgxMzM5NH0.gWLYibaWct3bzJ67YKg2WmTd4AMfdGeyoRJavxv7CTE`, 
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2aHdqaXhvZnp2aGNzbGx6bnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMzczOTQsImV4cCI6MjA3OTgxMzM5NH0.gWLYibaWct3bzJ67YKg2WmTd4AMfdGeyoRJavxv7CTE`,
      }
    }
  );

  const res = await data.json();
  console.log("Data fra supaBase:", res);

  return res;
}
