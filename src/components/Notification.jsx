export default function Notification({ message, type }) {
    return (
        <div className={`fixed top-0 right-0 m-4 p-4 rounded shadow-lg ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {message}
        </div>
    );
}