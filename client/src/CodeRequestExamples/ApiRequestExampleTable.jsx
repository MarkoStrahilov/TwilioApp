import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const ApiRequestExampleTable = () => {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Bash</Tab>
                    <Tab>Python</Tab>
                    <Tab>Node</Tab>
                    <Tab>Ruby</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Java</Tab>
                    <Tab>PHP</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>Bash</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Python</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Node</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Ruby</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Javascript</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Java</p>
                    </TabPanel>
                    <TabPanel>
                        <p>PHP</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default ApiRequestExampleTable