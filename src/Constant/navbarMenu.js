import todoListIcon from '../Assets/Icons/icon-todo.svg';
import calendarIcon from '../Assets/Icons/icon-calendar.svg';
import reminderIcon from '../Assets/Icons/icon-reminders.svg';
import planningIcon from '../Assets/Icons/icon-planning.svg';
import downArrowIcon from '../Assets/Icons/icon-arrow-up.svg';

const NAVBAR_MENU = [
    {
        id : 1,
        title : 'Features',
        icon: downArrowIcon,
        subMenu: 
        [
            {
                id: 1,
                title : 'Todo List',
                icon: todoListIcon,
                href: '#',
            },
            {   
                id: 2,
                title: 'Calendar',
                icon: calendarIcon,
                href: '#'
            },
            {
                id: 3,
                title: 'Reminders',
                icon: reminderIcon,
                href: '#'
            },
            {
                id: 4,
                title: 'Planning',
                icon: planningIcon,
                href: '#'
            }
        ]
    },
    {
        id: 2,
        title: 'Company',
        icon: downArrowIcon,
        subMenu: 
        [
            {
                id: 1,
                title : 'History',
                href: '#',
            },
            {   
                id: 2,
                title: 'Our Team',
                href: '#'
            },
            {
                id: 3,
                title: 'Blog',
                href: '#'
            },
        ]
    },
    {
        id: 3,
        title: 'Careers',
        href: '#'
    },
    {
        id: 4,
        title: 'About',
        href: '#'
    },
]

export default NAVBAR_MENU;