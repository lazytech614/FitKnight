import { FC, useState } from 'react';

interface AvailabilityTimePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timeSlots = ['Morning (6 AM - 9 AM)', 'Afternoon (12 PM - 3 PM)', 'Evening (5 PM - 8 PM)'];

const AvailabilityTimePicker: FC<AvailabilityTimePickerProps> = ({ value, onChange }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value);
  };

  const handleTimeSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedDay && selectedTimeSlot) {
      onChange(`${selectedDay} - ${selectedTimeSlot}`);
    } else {
      alert('Please select both day and time slot!');
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Availability</label>
      <div className="flex gap-2">
        <select
          value={selectedDay}
          onChange={handleDayChange}
          className="w-1/2 p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Day</option>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <select
          value={selectedTimeSlot}
          onChange={handleTimeSlotChange}
          className="w-1/2 p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Time Slot</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-2 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Confirm Availability
      </button>

      {value && <p className="mt-2 text-sm text-gray-500">Selected: {value}</p>}
    </div>
  );
};

export default AvailabilityTimePicker;
