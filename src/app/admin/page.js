import Link from 'next/link';
import React from 'react';

function Admin() {
  return (
    <div className='flex gap-5 flex-wrap justify-evenly py-4'>
      <Link href="/admin/add-challenge">Add challenge</Link>
      <Link href="/admin/realtime">Add Articles</Link>
      <Link href="/admin/Enterview-experience">View Enterview-experience</Link>
    </div>
  );
}

export default Admin;
