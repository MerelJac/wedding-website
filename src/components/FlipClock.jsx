import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function FlipClock() {
  const targetDate = new Date('2026-08-08T17:00:00'); // 5:00 PM (local time)
  return <FlipClockCountdown to={targetDate.getTime()} />;
}

export default FlipClock;
