export default function BasicTimePicker() {
  return (
    <div className="flex items-center justify-between space-x-4">
      <select name="time" id="from" className="px-4 py-2 border">
        <option value="12:00pm">12:00pm</option>
        <option value="1:00pm">1:00pm</option>
        <option value="2:00pm">2:00pm</option>
        <option value="3:00pm">3:00pm</option>
        <option value="4:00pm">4:00pm</option>
        <option value="5:00pm">5:00pm</option>
        <option value="6:00pm">6:00pm</option>
        <option value="7:00pm">7:00pm</option>
        <option value="8:00pm">8:00pm</option>
        <option value="9:00pm">9:00pm</option>
        <option value="10:00pm">10:00pm</option>
        <option value="11:00pm">11:00pm</option>
        <option value="12:00am">12:00am</option>
      </select>
      <div className="w-2 h-[2px] bg-slate-600 rounded-full"></div>
      <select name="time" id="to" className="px-4 py-2 border">
        <option value="12:00pm">12:00pm</option>
        <option value="1:00pm">1:00pm</option>
        <option value="2:00pm">2:00pm</option>
        <option selected value="3:00pm">
          3:00pm
        </option>
        <option value="4:00pm">4:00pm</option>
        <option value="5:00pm">5:00pm</option>
        <option value="6:00pm">6:00pm</option>
        <option value="7:00pm">7:00pm</option>
        <option value="8:00pm">8:00pm</option>
        <option value="9:00pm">9:00pm</option>
        <option value="10:00pm">10:00pm</option>
        <option value="11:00pm">11:00pm</option>
        <option value="12:00am">12:00am</option>
      </select>
    </div>
  );
}
