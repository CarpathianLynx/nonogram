import React from "react";
import FillOption, { EMPTY } from "../types/FillOption";
import "./styles/fill-picker.css";
import X from "./X";
import O from "./O";
import classes from "./classes";

interface FillPickerProps {
	options: FillOption[];
	onClickOption: (option: FillOption) => void;
	currentOption: FillOption;
}

interface FillPickerOptionProps {
	option: FillOption;
	active: boolean;
	onClick: () => void;
}

const FillPickerOption: React.FC<FillPickerOptionProps> = ({
	option,
	active,
	onClick
}) => {
	const { value, completed } = option;

	return (
		<div className={`color-button`} onClick={onClick}>
			<div
				className={classes("color-fill", {
					"color-fill-active": active,
					completed
				})}
				style={{ color: `var(--${value})` }}
			>
				{value === EMPTY ? <X padding={5} /> : <O padding={5} />}
			</div>
		</div>
	);
};

const FillPicker: React.FC<FillPickerProps> = ({
	options,
	currentOption,
	onClickOption
}) => {
	return (
		<div className={"color-picker"}>
			{options.map((option) => {
				const { value } = option;
				const active = value === currentOption.value;
				const onClick = () => onClickOption(option);
				return (
					<FillPickerOption
						key={option.value}
						option={option}
						active={active}
						onClick={onClick}
					/>
				);
			})}
		</div>
	);
};

export default FillPicker;
