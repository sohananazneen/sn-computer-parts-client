import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const ManageOrders = () => {
    const { data: orders, setOrders, isLoading } = useQuery('orders', () => fetch('https://stormy-river-80261.herokuapp.com/allOrders', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://stormy-river-80261.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
            toast('Order Deleted');
        }
    }
    return (
        <div className='my-8 mx-8'>
            <h2 className='text-secondary text-xl text-center my-4'>Manage All Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full border">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.toolName}</td>
                                    <td>{order.price}</td>
                                    <td>{order.quantity}</td>
                                    <button className='btn btn-error text-dark mx-2' onClick={() => handleDelete(order._id)}>Delete</button>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;