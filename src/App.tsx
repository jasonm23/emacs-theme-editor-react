import * as React from 'react';
import Header from './Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component<{}, {}> {
  public render() {
    return (
    <div className="App">
      <Header />
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-3'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>
                        <div className='form-group'>
                            <label>Theme name</label>
                            <input className='form-control' id='theme-name' placeholder='Theme name' type='text'/>
                        </div>
                    </div>
                    <div className='panel-body color-controls-panel'>
                        <ul className='list-unstyled collapse in' id='face-list' />
                        <ul className='list-unstyled collapse in'>
                            <li>
                                <div className='side-label'>
                                    <div aria-label='actions' className='btn-group' id='action-bar' role='group'>
                                        <button className='btn btn-lg btn-default' data-toggle='tooltip' id='local-storage' title='Save to local storage'>
                                            <span className='glyphicon glyphicon-plus' />
                                        </button>
                                        <button className='btn btn-lg btn-default' data-toggle='tooltip' id='generate' title='Generate EmacsLisp for download or copy'>
                                            <span className='glyphicon glyphicon-floppy-save' />
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='side-label'>
                                    <div id='user-themes' />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='col-sm-9'>

                <div className='row'>
                    <div className='panel panel-default'>
                        <div className='panel-heading'>
                            <div id='theme-selector' />
                        </div>
                        <div className='panel-body code-panel'>
                            <div className='fringe default' id='code-sample' />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
