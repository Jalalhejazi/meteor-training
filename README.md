meteor-training
===============

	> git checkout 01_templates_folders

## [meteor template](http://jalal.meteor.com/#templates)

meteor finder templates udefra navnet 

	<template name="test01" >
		<p class="blue">
			{{data01}}
		</p>
	</template>	

javaScript har brug for navnet af template for at returnere data i template som {{data01}}

	Template.test01.data01 = function() {
         return " this is data01 ";
     };

resultatet i browseren bliver derfor:

	<p class="blue">
		this is data01 
	</p>	





