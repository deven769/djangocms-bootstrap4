/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/divio/djangocms-boilerplate-webpack
 */

// import 'bootstrap/js/dist/alert'
import ContextGroup from 'components/context-group';
import PreviewGenerator from 'components/preview-generator';
import CardGroup from 'components/card-group'


$(() => {
    // color context
    new ContextGroup({
        select: '#id_link_context',
        classes: [
            '', 'btn-link', 'btn-primary', 'btn-secondary',
            'btn-success', 'btn-danger', 'btn-warning',
            'btn-info', 'btn-light', 'btn-dark',
        ],
    });
    // size context
    new ContextGroup({
        select: '#id_link_size',
        classes: [
            'btn-sm', '', 'btn-lg',
        ],
    });

    // preview for picture
    if ($('.djangocms-bootstrap4-link').length) {
        new PreviewGenerator({
            container: '.djangocms-bootstrap4-link',
            title: $('.djangocms-bootstrap4-link').data().preview,
        });
    }

    // card search
    new CardGroup({
        select: '#id_blueprint',
    });
});