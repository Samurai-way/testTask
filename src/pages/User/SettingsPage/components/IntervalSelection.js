import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../../../components/buttons/ActionButton";
import { useToasts } from "../../../../hooks";
import { intervalActions } from "../../../../store/ducks/interval";
import { validateAndFormatInterval } from "../../../../utils/helper";

const IntervalSelection = () => {
  const dispatch = useDispatch();
  const { interval } = useSelector((state) => state.Interval);

  const [intervalValue, setIntervalValue] = useState(interval);

  const { updateToasts } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, result } = validateAndFormatInterval(
      intervalValue,
      interval
    );
    if (error) return updateToasts("error", error);
    updateToasts(
      "success",
      `Interval time has been changed from ${interval} to ${result}`
    );
    dispatch(intervalActions.changeInterval(result));
  };

  const handleChange = ({ target }) => {
    setIntervalValue(target.value);
  };

  return (
    <form
      name="interval-selection"
      className="interval-selection settings-page_section"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="interval-selection" className="section__heading">
        Current interval
      </label>
      <input
        type="text"
        id="interval-selection"
        value={intervalValue}
        onChange={handleChange}
      />
      <ActionButton type="submit">Change</ActionButton>
    </form>
  );
};

export default IntervalSelection;
