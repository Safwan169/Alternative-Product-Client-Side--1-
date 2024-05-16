import React from 'react';

const RecComment = ({ datas }) => {
    // console.log(datas)
    const { Recname, brandd_name, date, image, productt_title, reasonn, urll, user_name } = datas
    const datee=new Date(date).toLocaleString()
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                {/* User Info */}
                <div className="flex items-center mb-2">
                    <img
                        src={image}
                       
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                        <p className="font-semibold">{user_name}</p>
                        <p className="text-gray-500 text-sm">{datee}</p>
                    </div>
                </div>
                {/* Recommendation Info */}
                <p className="text-gray-700 mb-2">{reasonn}</p>
                {/* Product Info */}
                <div className="flex items-center mb-2">
                    <img
                        src={urll}
                        className="w-16 h-16 rounded-md mr-2"
                    />
                    <div>
                        <p className="font-semibold">{Recname}</p>
                        <p className="text-gray-500">{brandd_name}</p>
                        <p className="text-sm text-gray-500">{productt_title}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecComment;