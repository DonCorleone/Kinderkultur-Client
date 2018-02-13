import { RouterModule, Routes } from '@angular/router';

import { LinksComponent } from './components/links.component';
import { LinksEditableComponent } from './components/linksEditable.component';
import { LinksEditableDetailComponent } from './components/linksEditable-detail.component';

const routes: Routes = [
	{ path: '', component: LinksComponent },
	{ path: 'editable', component: LinksEditableComponent },
	{ path: 'editable/:id', component: LinksEditableDetailComponent }
];

export const LinksRoutes = RouterModule.forChild(routes);
