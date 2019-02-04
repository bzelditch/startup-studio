import React from 'react'
import {Route} from 'react-router-dom'
import {StudentProfile, CommentView} from './pages'

const BaseRouter = () => (

	<div>
		<Route exact path='/studentprofile' component={StudentProfile} />
		<Route exact path='/commentview' component={CommentView} />
	</div>

	);

export default BaseRouter;