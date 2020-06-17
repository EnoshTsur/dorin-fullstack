import React from 'react'
import Tab from './Tab'
import classes from './TabView.module.css'

interface Props {
    data: Array<{title: string , component: any }>
        
}

const TabView: React.FC<Props> = ({ data, }) => {

    const [ activeTab, setActiveTab, ] = React.useState(0)
    
    const { TabContainer, } = classes

    const titles: Array<string> = data
        .map(({ title, }) => title);

    const components: Array<any> = data
        .map(({ component, }) => component);
    
     return (
            <>
            <div className={TabContainer}> 
                {
                    titles.map(( title, index) => (
                                <Tab 
                                    key={title}
                                    isActive={index === activeTab}
                                    title={title} 
                                    onClick={() => setActiveTab(index)}
                                    index={index}
                                />
                    ))
                }
            </div>

                {
                    components.map((c, index) => index === activeTab && (
                        <div key={`t${index}`}>
                            {
                                (c)
                            }
                        </div>
                    ))
                }

            </>
            )
                    
                    
                    

}

export default TabView
