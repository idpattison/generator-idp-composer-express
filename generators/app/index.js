/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

let generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    constructor: function() {
        generators.Base.apply(this, arguments);
        this.options = this.env.options;
    },

    /**
   * @returns {Object} List of questions to ask
   */
    prompting: function() {
        console.log('Welcome to the Hyperledger Composer project generator');
        const questions = [{
            type: 'list',
            name: 'generatorType',
            message: 'Please select the type of project:',
            choices: [
                {
                    name: 'CLI',
                    value: 'CLI'
                },
                {
                    name: 'Angular',
                    value: 'Angular'
                },
                {
                    name: 'Business Network',
                    value: 'businessnetwork'
                },
                {
                    name: 'Node.js Express',
                    value: 'express'
                },
                {
                    name: 'Model',
                    value: 'model'
                }
            ],
            store: true,
            validate: function(input) {
                if(input !== null && input !== undefined) {
                    return true;
                } else {
                    return 'Generator type must be defined';
                }
            }
        }];
        return this.prompt(questions).then(answers => {
            this.generatorType = answers.generatorType;
        });
    },

    configuring: function() {
        if(this.generatorType === 'CLI'){
            console.log('You can run this generator using: \'yo idp-composer-express:cli\'');
            this.composeWith(require.resolve('../cli'));
        } else if(this.generatorType === 'Angular'){
            console.log('You can run this generator using: \'yo idp-composer-express:angular\'');
            this.composeWith(require.resolve('../angular'));
        } else if (this.generatorType === 'businessnetwork') {
            console.log('You can run this generator using: \'yo idp-composer-express:businessnetwork\'');
            this.composeWith(require.resolve('../businessnetwork'));
        } else if (this.generatorType === 'express') {
            console.log('You can run this generator using: \'yo idp-composer-express:express\'');
            this.composeWith(require.resolve('../express'));
        } else if (this.generatorType === 'model') {
            console.log('You can run this generator using: \'yo idp-composer-express:model\'');
            this.composeWith(require.resolve('../model'));
        } else{
            console.log('Generator type not recognised');
        }
    },




});
