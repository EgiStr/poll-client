
const RadioButton = () => {
    return (
        <>
            <div className="flex items-center mr-4 mb-4">
                <input id="radio1" type="radio" name="radio" className="hidden" />
                <label htmlFor="radio1" className="flex items-center cursor-pointer">
                <span className="w-6 h-6  inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                best option</label>
            </div>

        </>
    )
}

export default RadioButton
