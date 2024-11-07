import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { showOrderDetailsScreen } from '@/store/orderSlice';
import SearchBar from '@/components/SearchBar';
import OrderHistory from '@/components/OrderHistory';

const OrderDetails = () => {
    const dispatch = useDispatch();
    const selectedOrder = useSelector((state: RootState) => state.orders.selectedOrder);
    const orderDetailsVisible = useSelector((state: RootState) => state.orders.orderDetailsVisible);

    const handleCloseOrderDetails = () => {
        dispatch(showOrderDetailsScreen(false));
    };

    const {
        orderInfo = {
            invoiceName: "",
            date: "",
            orderType: "",
            quantity: 0,
            weight: "",
            cost: "",
        },
        shippingInfo = {
            address: "",
            deliveryDate: "",
            customerName: "",
            contact: "",
            mailId: "",
            paymentStatus: "",
            paymentStatusColor: "",
        },
        labels = {
            order: ["Order ID", "Order Type", "Quantity", "Weight", "Cost"],
            shipping: ["Ship To", "Customer Name", "Contact", "Mail ID", "Payment Status"],
        },
    } = selectedOrder || {};

    return (
        <div
            className={`fixed h-screen inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center ${orderDetailsVisible ? "block" : "hidden"
                }`}
        >
            <div className="bg-[#EEEEEE] rounded-lg w-[960px] h-[600px] p-6 shadow-lg relative">
                <button
                    onClick={handleCloseOrderDetails}
                    className="absolute top-2 p-2 right-2 text-gray-500 hover:text-red-500"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="font-neo_medium">
                    <div className="mb-8 flex justify-between">
                        <SearchBar />
                    </div>
                    <h2 className="text-xl font-bold mb-4">Order Details -</h2>
                    <div className="p-4 bg-white rounded-lg">
                        <div className="grid grid-cols-4 gap-4">
                            <div>
                                <p className="font-bold text-lg">
                                    {labels.order[0]} - <span className="font-semibold text-gray-600">{orderInfo.invoiceName}</span>
                                </p>
                                <p className="text-sm text-gray-500 mb-8">{orderInfo.date}</p>
                                <p className='text-lg text-[#464255]'>{labels.order[1]}</p>
                                <p className='text-lg text-[#464255]'>{labels.order[2]}</p>
                                <p className='text-lg text-[#464255]'>{labels.order[3]}</p>
                                <p className='text-lg text-[#464255]'>{labels.order[4]}</p>
                            </div>
                            <div>
                                <div className="h-8"></div>
                                <div className="h-8 mb-4"></div>
                                <p className='text-[#909090] text-lg'>{orderInfo.orderType}</p>
                                <p className='text-[#909090] text-lg'>{orderInfo.quantity}</p>
                                <p className='text-[#909090] text-lg'>{orderInfo.weight}</p>
                                <p className='text-[#909090] text-lg'>{orderInfo.cost}</p>
                            </div>
                            <div>
                                <p className='ml-[2.5rem] text-lg text-[#464255]'>{labels.shipping[0]}</p>
                                <div className="h-8 mb-8"></div>
                                <div className="border-l-2 border-gray-400 pl-10">
                                    <p className='text-lg text-[#464255]'>{labels.shipping[1]}</p>
                                    <p className='text-lg text-[#464255]'>{labels.shipping[2]}</p>
                                    <p className='text-lg text-[#464255]'>{labels.shipping[3]}</p>
                                    <p className='text-lg text-[#464255]'>{labels.shipping[4]}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#909090]">{shippingInfo.address}</p>
                                <p className="text-lg text-gray-500 mb-[0.9rem]">{shippingInfo.deliveryDate}</p>
                                <p className='text-lg text-[#909090]'>{shippingInfo.customerName}</p>
                                <p className='text-lg text-[#909090]'>{shippingInfo.contact}</p>
                                <p className='text-lg text-[#909090]'>{shippingInfo.mailId}</p>
                                <p className={`font-bold mt-[0.3rem] ${shippingInfo.paymentStatusColor === 'green' ? 'text-green-500' : 'text-orange-500'}`}>
                                    {shippingInfo.paymentStatus}
                                </p>
                            </div>
                        </div>
                    </div>
                    <OrderHistory />
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
