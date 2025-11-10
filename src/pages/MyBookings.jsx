import React from 'react';

const MyBookings = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const checked = e.target.availability.checked;
        console.log(checked);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability"
            className="w-4 h-4 text-orange-400 focus:ring-orange-400"
          />
          <label className="text-accent">Available</label>
        </div>
        <button>Submit</button>
        </form>
        </div>
    ); 
};

export default MyBookings;