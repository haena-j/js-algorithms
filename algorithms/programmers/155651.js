function solution(book_time) {
  const toMinutes = (time) => {
    const [hour, min] = time.split(":");
    return hour * 60 + Number(min);
  };

  const bookings = book_time
    .map(([start, end]) => [toMinutes(start), toMinutes(end) + 10])
    .sort((a, b) => a[0] - b[0]);

  const rooms = [];
  for (const [start, end] of bookings) {
    const roomIndex = rooms.findIndex((roomEnd) => roomEnd <= start);
    roomIndex !== -1 ? (rooms[roomIndex] = end) : rooms.push(end);
  }

  return rooms.length;
}

export default solution;
