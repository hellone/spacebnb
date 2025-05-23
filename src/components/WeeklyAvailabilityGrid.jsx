import React, { useState } from 'react';

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const generateSlots = () => {
  const slots = [];
  for (let h = 0; h < 24; h++) {
    slots.push(`${h.toString().padStart(2, '0')}:00`);
    slots.push(`${h.toString().padStart(2, '0')}:30`);
  }
  return slots;
};

const WeeklyAvailabilityGrid = ({ availability, onChange }) => {
  const timeSlots = generateSlots();
  const [isDragging, setIsDragging] = useState(false);

  const toggleSlot = (day, slot) => {
    const isSelected = availability[day]?.includes(slot);
    const updated = isSelected
      ? availability[day].filter(s => s !== slot)
      : [...(availability[day] || []), slot];

    onChange({
      ...availability,
      [day]: updated.sort(),
    });
  };

  const handleMouseDown = (day, slot) => {
    setIsDragging(true);
    toggleSlot(day, slot);
  };

  const handleMouseEnter = (day, slot) => {
    if (isDragging) toggleSlot(day, slot);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div onMouseUp={handleMouseUp}>
      {days.map(day => (
        <div key={day}>
          <h4 style={{ textTransform: 'capitalize' }}>{day}</h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '4px',
              marginBottom: '1rem',
            }}
          >
            {timeSlots.map((slot, i) => {
              const isSelected = availability[day]?.includes(slot);
              return (
                <div
                  key={i}
                  onMouseDown={() => handleMouseDown(day, slot)}
                  onMouseEnter={() => handleMouseEnter(day, slot)}
                  style={{
                    userSelect: 'none',
                    textAlign: 'center',
                    padding: '6px',
                    fontSize: '12px',
                    backgroundColor: isSelected ? '#007bff' : '#f0f0f0',
                    color: isSelected ? '#fff' : '#000',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    cursor: 'pointer'
                  }}
                >
                  {slot}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyAvailabilityGrid;
