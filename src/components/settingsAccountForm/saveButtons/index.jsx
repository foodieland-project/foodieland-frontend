function SaveButtons() {
  return (
    <div className="flex mt-12">
      <div>
        <button
          type="submit"
          className="bg-mainBlue rounded-md text-white py-2 px-4 cursor-pointer"
        >
          SAVE CHANGES
        </button>
      </div>
      <div className="ml-4">
        <button className="border-2 border-gray-300  rounded-md py-1.5 px-4  text-secondary">
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default SaveButtons;
