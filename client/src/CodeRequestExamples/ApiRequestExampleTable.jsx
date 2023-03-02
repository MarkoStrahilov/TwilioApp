import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import RequestsCard from '../shared/ReqeustsCard'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ApiRequestExampleTable = () => {

    const bashString = `
    curl -X POST https://smscroc.com/send/message?key={YOUR API KEY}
    --data-urlencode phone='5555555555' 
    --data-urlencode message='Hello world' 
    `

    const pythonString = `import requests

    response = requests.post("https://smscroc.com/send/message?key={YOUR API KEY}", {
      'phone': '5555555555',
      'message': 'Hello world',
    })

    print(response.json())
    `

    const nodeString = `
    const axios = require('axios')

    const requestDataFunction = async() {
        const response = await axios.post("https://smscroc.com/send/message?key={YOUR API KEY}", {
            'phone': '5555555555',
            'message': 'Hello world',
        })

        console.log(response.data)
    }

    requestDataFunction()
    `

    const rubyString = `
    require 'net/http'
    require 'uri'
    
    uri = URI.parse("https://smscroc.com/send/message?key={YOUR API KEY}")
    Net::HTTP.post_form(uri, {
      :phone => '5555555555',
      :message => 'Hello world',
    })
    `
    const javascriptString = `
    fetch("https://smscroc.com/send/message?key={YOUR API KEY}", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: '5555555555',
          message: 'Hello world',
    }),
      }).then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
      });
      `

    const javaString = `
    final NameValuePair[] data = {
        new BasicNameValuePair("phone", "5555555555"),
        new BasicNameValuePair("message", "Hello world"),
    };

    HttpClient httpClient = HttpClients.createMinimal();
    HttpPost httpPost = new HttpPost("https://smscroc.com/send/message?key={YOUR API KEY}");
    httpPost.setEntity(new UrlEncodedFormEntity(Arrays.asList(data)));
    HttpResponse httpResponse = httpClient.execute(httpPost);
    
    String responseString = EntityUtils.toString(httpResponse.getEntity());
    JSONObject response = new JSONObject(responseString);
    `

    const phpString = `
    $ch = curl_init("https://smscroc.com/send/message?key={YOUR API KEY}");
    $data = array(
        'phone' => '5555555555',
        'message' => 'Hello world',
    );

    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);
    curl_close($ch);
`

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
                        <SyntaxHighlighter language="bash" style={docco}>
                            {bashString}
                        </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel>
                        <SyntaxHighlighter language="python" style={docco}>
                            {pythonString}
                        </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel>
                        <SyntaxHighlighter language="node" style={docco}>
                            {nodeString}
                        </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel>
                        <SyntaxHighlighter language="ruby" style={docco}>
                            {rubyString}
                        </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel>
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {javascriptString}
                        </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel>
                        <SyntaxHighlighter language="java" style={docco}>
                            {javaString}
                        </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel>
                        <SyntaxHighlighter language="php" style={docco}>
                            {phpString}
                        </SyntaxHighlighter>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default ApiRequestExampleTable