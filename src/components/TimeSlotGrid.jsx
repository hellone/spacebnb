import React, { useState } from 'react';

const generateTimeSlots = () => {
  const slots = [];
  let hour = 7;
  let minute = 0;
  while (hour < 24) {
    const h = hour.toString().padStart(2, '0');
    const m = minute.toString().padStart(2, '0');
    slots.push(`${h}:${m}`);
    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }
  return slots;
};

const TimeSlotGrid = ({ reserved = [], onChange }) => {
  const [selected, setSelected] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const slots = generateTimeSlots();

  const toggleSlot = (slot) => {
    if (reserved.includes(slot)) return;
    setSelected(prev => {
      const exists = prev.includes(slot);
      const updated = exists ? prev.filter(s => s !== slot) : [...prev, slot];
      onChange?.(updated);
      return updated;
    });
  };

  const handleMouseDown = (slot) => {
    setIsDragging(true);
    toggleSlot(slot);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = (slot) => {
    if (isDragging) toggleSlot(slot);
  };

  return (
    <div
      onMouseUp={handleMouseUp}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gap: '6px',
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      {slots.map((slot, i) => {
        const isSelected = selected.includes(slot);
        const isReserved = reserved.includes(slot);
        return (
          <div
            key={i}
            onMouseDown={() => handleMouseDown(slot)}
            onMouseEnter={() => handleMouseEnter(slot)}
            style={{
              userSelect: 'none',
              padding: '10px',
              textAlign: 'center',
              borderRadius: '6px',
              background: isReserved ? '#ccc'
                        : isSelected ? '#007bff'
                        : '#f4f4f4',
              color: isReserved ? '#777' : isSelected ? '#fff' : '#000',
              border: '1px solid #ddd',
              cursor: isReserved ? 'not-allowed' : 'pointer'
            }}
          >
            {slot}
          </div>
        );
      })}
    </div>
  );
};

export default TimeSlotGrid;
