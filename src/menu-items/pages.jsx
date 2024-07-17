import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconBug, IconBook, IconHelp } from '@tabler/icons-react'; // Make sure to import the appropriate icons

// constants
const icons = { IconKey, IconBug, IconBook, IconHelp }; // Add IconHelp to the icons constant

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: <FormattedMessage id="pages" />,
    caption: <FormattedMessage id="pages-caption" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        {
            id: 'maintenance',
            title: <FormattedMessage id="maintenance" />,
            type: 'collapse',
            icon: icons.IconBug,
            children: [
                {
                    id: 'error',
                    title: <FormattedMessage id="error-404" />,
                    type: 'item',
                    url: '/pages/error',
                    target: true
                },
                {
                    id: 'error-500',
                    title: <FormattedMessage id="error-500" />,
                    type: 'item',
                    url: '/pages/500',
                    target: true
                },
                {
                    id: 'coming-soon',
                    title: <FormattedMessage id="coming-soon" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'coming-soon1',
                            title: (
                                <>
                                    <FormattedMessage id="coming-soon" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/pages/coming-soon1',
                            target: true
                        },
                        {
                            id: 'coming-soon2',
                            title: (
                                <>
                                    <FormattedMessage id="coming-soon" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/pages/coming-soon2',
                            target: true
                        }
                    ]
                },
                {
                    id: 'under-construction',
                    title: <FormattedMessage id="under-construction" />,
                    type: 'item',
                    url: '/pages/under-construction',
                    target: true
                }
            ]
        },
        {
            id: 'lessons',
            title: <FormattedMessage id="lessons" />,
            type: 'collapse',
            icon: icons.IconBook,
            url: '/pages/lessons',
            target: true,
            children: [
                {
                    id: 'lesson-error',
                    title: <FormattedMessage id="error-404" />,
                    type: 'item',
                    url: '/pages/lessons/error',
                    target: true
                },
                {
                    id: 'another-page',
                    title: <FormattedMessage id="lessons" />,
                    type: 'item',
                    url: '/pages/lessons/lessons',
                    target: true
                }
            ]
        },
        {
            id: 'quizzes',
            title: <FormattedMessage id="quizzes" />,
            type: 'collapse',
            icon: icons.IconHelp,
            url: '/pages/quizzes',
            target: true
        }
    ]
};

export default pages;
