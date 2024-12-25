import {promises as fs} from 'fs';

async function getDocData(){
    const filePath = process.cwd() + '/src/data/docs/docsList.json';
    const file = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(file);
  return data; 
}

export default async function Doc() {
  const allDocData = await getDocData();
  const allDocTitle = allDocData.map((doc) => ({
    id: doc.id,
    title: doc.title}));
  console.log(allDocTitle)

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4">
        <h1 className="text-4xl font-bold text-center">Main Document</h1>
      </div>
    </main>
  );
}