
const RadioButton = ({name , value}) => {
    return (
        <>
            <div className="flex items-center mr-4 mb-4">
                <input id={name} type="radio" name="radio" className="hidden" value={value} />
                <label htmlFor={name} className="flex items-center cursor-pointer">
                <span className="w-6 h-6  inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                {name}</label>
            </div>

        </>
    )
}

export default RadioButton
