package com.testprojects.blockstyle;

import javax.inject.Inject;
 


import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;


@Model(adaptables = Resource.class)
public class SimpleComponentModel {

	@Inject @Optional
    private String authoredText;
	
    
    public String getAuthoredText(){ return authoredText; }
    
}
