---
title: "Introducing the XML Importers"
weight: 5
description: ""
---


The XML Importer extension is widely used to help users import XML content into their Symphony sections. Developers enter a URL that returns XML and then write XPath to map values to their corresponding fields, but sometimes this results in a field not receiving a value, an incorrect value, or the XML Importer failing to import anything.

While not always the case, sometimes the XPath could be wrong, namespaces weren't added or you've discovered a bug (log it, but it can also be because a Field doesn't know how take the value you've given it and save it. This short article will explain how you can ensure that your field is compatible with the XML Importer, thanks to the prepareImportValue function.

### Why is it needed?

Fields in Symphony have two existing function's, checkPostFieldData and processRawFieldData which are designed to ensure that the incoming $data is valid, and then to process $data (which may be an array, string or null) into an associative array. The resulting array is used by the EntryManager to save the values in the field's database table (where each key is a column name and the value is the value of that column).

Let's look at the core Input field as a simple example as to what $data may be. An Input field called Title, will be represented on the Publish form as one <input />, created with a name of fields[title] (where title is now referred to as `field-handle).

When the form is submitted, the data is sent via $_POST to Symphony and each field is iterated over, passing $_POST['fields']['field-handle'] to their relevant processRawFieldData functions. The Input field's processRawFieldData function expects $data to be a string, and the resulting array returned is simply array('value' => 'My Article Title'). Easy.

Looking at a more complicated field, such as the Map Location field, you'll quickly notice that it's markup on the Publish page reveals many fields such as fields[field-handle][coordinates], fields[field-handle][centre] and fields[field-handle][zoom].

The processRawFieldData function for this field is more complex, it expects an array of $data and manipulates it to match the field's database table.

The XPath in your XML Importer will always return a single string which will mean importing an Input field will work fine, but importing into a Map Location field will not. The Map Location field expects an array of $data, but as it will only get a string so it's impossible for processRawFieldData to return the correctly process the $data and return a valid array.

The prepareImportValue function is designed to take a single value and return an array that processRawFieldData expects and the best thing is that's it's really simple to implement!

### How do I implement prepareImportValue?

public function prepareImportValue($value, $entry_id = null)
The prepareImportValue function lives in your Field class and accepts two parameters, $value and $entry_id, where $value will be the value from the XPath expression, and $entry_id will be the ID of the entry that is being edited (or null if this is a new entry). The function should return an array which is expected by checkPostFieldData and processRawFieldData.

Really, that's all it takes.

### What about the XML Importer PHP helpers?

As well as XPath, the XML Importer gives you an option to run a PHP function over the evaluated XPath. Technically you can use this feature to make your helper return the required array for processRawFieldData, which can be helpful if there is a field that doesn't import correctly and has not implemented the prepareImportValue function.

If you go down this road, I recommend that you open up a pull request to the extension developer that implements your helper as their field's prepareImportValue function. Consider it an act of good karma of your pioneering ways as I'm sure the community and future you will be grateful that they don't have to discover this the hard way like you did :)

### Bonus

The processRawFieldData function has a somewhat mysterious parameter called $simulate. In normal Symphony use, this parameter is almost always false, because when the function is run, you want it to complete the task and return the correct array. However, in some cases, you might want to 'dry run' the function, for example uploading a file, where the processing should go as far as possible before actually putting the file on the filesystem to try and predict if there will be an error.

The XML Importer sets the $simulate parameter to true and by doing so, this allows values to be written in the Upload field. If $simulate is true and it is a new entry, the Upload field will return an array that treats the value of $data as the path to the file. Be warned that these files must exist already otherwise the field will throw an error.

The Upload Field aside, remembering about $simulate may prove helpful if you're doing something particularly complicated within your field.

I hope this article helps describe the prepareImportValue function, the benefits and how you can implement it in your extensions!
