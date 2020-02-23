import React from 'react';
import { VueInReact } from "vuera";
import { VssueComponent } from "vssue";
import 'vssue/dist/vssue.css'
import GithubV3 from '@vssue/api-github-v3';
const ReactVssue = VueInReact(VssueComponent);

let vssopts = {
    api: GithubV3,
    autoCreateIssue: true
}

console.log('VSSUE_OWNER=', process.env.GATSBY_VSSUE_OWNER)

let GATSBY_VSSUE_OPTS={
  clientId: process.env.GATSBY_VSSUE_CLIENTID,
  clientSecret: process.env.GATSBY_VSSUE_CLIENT_SECRET,
  owner: process.env.GATSBY_VSSUE_OWNER,
  repo: process.env.GATSBY_VSSUE_REPO
}

vssopts = { ...vssopts, ...GATSBY_VSSUE_OPTS}
export default (props) => <ReactVssue title={props.title} options={vssopts}/>

