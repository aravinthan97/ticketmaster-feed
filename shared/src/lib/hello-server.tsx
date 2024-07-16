// React server components are async so you make database or API calls.
'use server'
export async function HelloServer() {
  return <h1>Hello Server</h1>;
}
