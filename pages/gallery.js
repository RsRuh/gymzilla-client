
const gallery = () => {
    return (
        <section className="py-6">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src="https://images.pexels.com/photos/35987/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://images.pexels.com/photos/4218662/pexels-photo-4218662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://images.pexels.com/photos/10551484/pexels-photo-10551484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://images.pexels.com/photos/9302172/pexels-photo-9302172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://images.pexels.com/photos/13982110/pexels-photo-13982110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://images.pexels.com/photos/5209197/pexels-photo-5209197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://images.pexels.com/photos/14762174/pexels-photo-14762174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://images.pexels.com/photos/9073246/pexels-photo-9073246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://images.pexels.com/photos/8436407/pexels-photo-8436407.jpeg?auto=compress&cs=tinysrgb&w=1600" />
                <img src="https://images.unsplash.com/photo-1520877745935-616158eb7fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
            </div>
        </section>
    );
};

export default gallery;