import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';

class VoicesTable extends Component {

    handleChangePage(event, page) {
        console.log(page);
    }

    handleChangeRowsPerPage() {

    }

    render() {
        let voices = this.props.voices;

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Recording
                        </TableCell>
                        <TableCell>
                            Created
                        </TableCell>
                        <TableCell>
                            Statement
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        voices.map(voice => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        <audio src={voice.audio_url} controls></audio>
                                    </TableCell>
                                    <TableCell>
                                        {voice.created_at}
                                    </TableCell>
                                    <TableCell>
                                        {voice.text}
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                <TableFooter>
                    <TablePagination
                        colSpan={3}
                        count={32}
                        rowsPerPageOptions={[20]}
                        rowsPerPage={20}
                        page={0}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </TableFooter>
            </Table>
        );
    }
}

export default VoicesTable;