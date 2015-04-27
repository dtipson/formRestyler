(function($){

    function simpleRip($form,closestSelector){
        var array = [];
        $form.find('input,select').each(function(i,el){
            var $field = $(this),
                $parent = $field[closestSelector?'closest':'parent'](closestSelector),
                $label = $parent.is('label')?
                    $parent :
                    $parent.find('label'),
                outputObj = {
                    $field: $field
                };
            if($label.length){
                outputObj.$label = $label;
            }
            array.push(outputObj);
        });
        return array;
    }
    window.testform = simpleRip($('form'));


    function simpleRestyle($form,array){
        if(!array.length){
            return false;
        }
        $.each(array,function(i,obj){
            var $div = $('<div/>');
            $div.append(obj.$field).prepend(obj.$label);
            $form.append($div);
        });
    }

    simpleRestyle($('form'), window.testform);

    /*
    $.fn.formRip = function(config){
        if(!this || this.tagName.toLowerCase()!=="form"){
            return this;
        }
        var $form = $(this),
            default_config = {
                auto: true,
                fields: []
            }
            config = $.extend(
                default_config,
                _.isObject(config) && config||{}
            );

    }
    */
}(jQuery));