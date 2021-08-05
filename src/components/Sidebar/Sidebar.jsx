import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	Drawer,
} from '@material-ui/core';

import { ReactComponent as DashboardIcon } from 'images/icons/dashboard.svg';
import { ReactComponent as CategoriesIcon } from 'images/icons/categories.svg';
import { ReactComponent as BudgetIcon } from 'images/icons/budget.svg';
import { ReactComponent as IncomeIcon } from 'images/icons/income.svg';
import { ReactComponent as ExpenseIcon } from 'images/icons/expense.svg';

const list = [
	{ title: 'Dashboard', icon: <DashboardIcon /> },
	{ title: 'Categories', icon: <CategoriesIcon /> },
	{ title: 'Budget', icon: <BudgetIcon /> },
	{ title: 'Income', icon: <IncomeIcon /> },
	{ title: 'Expense', icon: <ExpenseIcon /> },
];

const Sidebar = ({ props }) => {
	return (
		<Drawer

		>
			<List>
				{list.map(item =>
					<ListIem
						button
						key={item.title}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.title} />
					</ListIem>
				)}
			</List>
		</Drawer>
	);
};

Sidebar.propTypes = {
	propTypes
};

export default Sidebar;