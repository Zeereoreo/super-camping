// // pages/detail/[id].tsx

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function DetailPage() {
//     const router = useRouter();
//     const { id } = router.query;
//     const [item, setItem] = useState(null);

//     useEffect(() => {

//         if (id) {

//             const fetchItemDetails = () => {
  
//                 setItem({
//                     id,
//                     name: `Item ${id}`,
//                     description: `Description for item ${id}`,
//                 });
//             };

//             fetchItemDetails();
//         }
//     }, [id]);

//     if (!item) return <div>Loading...</div>;

//     return (
//         <div>
//             <h1>{item.name}</h1>
//             <p>{item.description}</p>
//         </div>
//     );
// }
