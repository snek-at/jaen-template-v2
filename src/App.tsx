/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
// A possible design library that could be used
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ReactDOM from 'react-dom'

import {CMSProvider} from './core'
import {HomePage} from './example/pages'
import ImprintPage from './example/pages/Imprint'

ReactDOM.render(
  <CMSProvider
    settings={{gitRemote: process.env.REACT_APP_JAEN_GIT_REMOTE}}
    pages={[HomePage, ImprintPage]}
  />,
  document.getElementById('root')
)
