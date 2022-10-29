import useApi from "../hooks/useApi"
import Loader from "./Loader";

export default function YourProf() {
    const { data } = useApi('https://handy-dandy.azurewebsites.net/api/get-user')
    console.log(data)
    return (
        <>
            

            {data ?
                <div className="flex justify-center">
                    <div className=" max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">

                        <div>
                            <h2 className="text-gray-800 text-3xl font-semibold">Your Profile</h2>
                            <p className="mt-2 text-gray-600">Pro: {JSON.stringify(data[0].is_pro)}</p>
                            <p className="mt-2 text-gray-600">Address: {data[0].address}</p>
                            <p className="mt-2 text-gray-600">City: {data[0].city}</p>
                            <p className="mt-2 text-gray-600">ZipCode: {data[0].zip}</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <p className="text-xl font-medium text-indigo-500">{data[0].name}</p>
                        </div>
                    </div>
                </div>
            : <Loader />}

        </>
    )
}