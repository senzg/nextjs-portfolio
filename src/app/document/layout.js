import DocSidebar from "./components/DocSidebar";
import {promises as fs} from 'fs';

  async function getBlogData(){
      const filePath = process.cwd() + '/src/data/docs/docsList.json';
      const file = await fs.readFile(filePath, 'utf8');
      const data = JSON.parse(file);
    return data; 
  }

export default async function BlogLayout({ children }) {
    const allDocData =  await getBlogData();
    const allDocHeader = allDocData.map((repo) => ({
      repoId: repo.repoId,
      repoTitle: repo.repoTitle,
      documents: repo.documents.map((doc) => ({
        docId: doc.docId,
        title: doc.title
      }))
    }));

    return (
      <>
      <DocSidebar docHeaders={allDocHeader}/>
      <section className="ml-24 sm:ml-48 md:ml-56 flex-1 p-8">{children}</section>    
      </>
    )
  }